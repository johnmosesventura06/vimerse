const GetUsers = require('./use_cases/get_all_users');
const AddUser = require('./use_cases/add_user');
const GetUserById = require('./use_cases/get_user_by_id');
const GetUserByEmail = require('./use_cases/get_user_by_email');
const UpdateUser = require('./use_cases/update_user');
const GetAgentsBySuperAgent = require('./use_cases/get_agents_by_super_agent');
const GetPlayerAgent = require('./use_cases/get_player_agent');
const GetPlayersByAgent = require('./use_cases/get_players_by_agent');
const GetUsersByType = require('./use_cases/get_users_by_type');
const { restart } = require('nodemon');
// const UserRegisteredPublisher = require('../messages/publishers/user-registered-publisher');
// const natsWrapper = require('../../nats-wrapper');

module.exports = (repository) => {
  const getUsers = (req, res, next) => {
    const getUSersCase = GetUsers(repository);
    getUSersCase.execute()
      .then(
        result => { res.json(result) },
        err => { next(res.status(500).send({ error: err.message })) }
      );
  }

  const getUserById = (req, res, next) => {
    console.log(req.query.id)
    var id = req.query.id;
    const getUserbByIdCase = GetUserById(repository);
    getUserbByIdCase.execute(id)
      .then(
        result => { res.json(result) },
        err => { next(res.status(500).send({ error: err.message })) }
      );
  }

  const getUserByType = (req, res, next) => {
    //console.log( req.query.type)
    var type = req.query.type;
    var isactive = req.query.isactive;
    console.log(type, isactive)
    const getUserByTypeCase = GetUsersByType(repository);
    getUserByTypeCase.execute(type, isactive)
      .then(
        result => { res.json(result) },
        err => { next(res.status(500).send({ error: err.message })) }
      );
  }

  const getPlayersAgents = (req, res, next) => {
    var agentsList = []
    var id = req.query.id;
    console.log("request", id)
    const getAgentList = GetAgentsBySuperAgent(repository);
    getAgentList.execute(id)
      .then(
        result => {
          console.log("results", result.length)
          if (result.length !== 0) {

            result.forEach(function (agent, i) {

              const getPlayerList = GetPlayersByAgent(repository);
              getPlayerList.execute(agent.id)
                .then(players => {
                  let agentObj = {}
                  agentObj.agent = agent
                  agentObj.playerlist = players

                  agentsList.push(agentObj);

                  if (result.length == agentsList.length) {
                    res.json(agentsList)

                  }

                })


            })

          } else {

            next(res.status(404).send({ error: "no registered users" }))
          }

        },
        err => { next(res.status(500).send({ error: err.message })) }
      )

      ;
  }


  const getPlayerAgentAndSuperAgent = (req, res, next) => {
    var playerAgents = []
    var id = req.query.id;
    console.log("request", id)
    const getAgent = GetPlayerAgent(repository);
    getAgent.execute(id)
      .then(
        result => { 
          console.log("results",result)
          if(result !== undefined) {
          if(result.length !== 0) {

            const getPlayerList = GetPlayerAgent(repository);
            getPlayerList.execute(result._id)
              .then(sup => {

                console.log("super", sup)
                let agentObj = {}
                agentObj.agent = result
                agentObj.superagent = sup

                playerAgents.push(agentObj);

                if (playerAgents.length !== 0) {
                  res.json(playerAgents)

                }

              },
              //intentional error code please don't change, transaction service dependent
              err => { next(res.status(200).send({ error: "User does not have a referrer" })) }
              )
              

        } else {

          //intentional error code please don't change, transaction service dependent
          next(res.status(200).send({ error: "User does not have a referrer" }))
        }
      } else {
        //intentional error code please don't change, transaction service dependent
        next(res.status(200).send({ error: "User does not have a referrer" }))
      }
           
        },
        err => { next(res.status(200).send({ error: err.message })) }
      )

      ;
  }


  const getPlayers = (req, res, next) => {
    var id = req.query.id;
    console.log(req.query.id)
    const getPlayersCase = GetPlayersByAgent(repository);
    getPlayersCase.execute(id)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      );
  }

  const addUser = (req, res, next) => {
    const addUserCase = AddUser(repository);
    let { 
      firstname,
      lastname,
      email,
      username,
      password,
      phoneNumber,
      occupation,
      usertype,
      referrer,
      birthday,
      address,
      timestamp,
      income_source,
      nationality,
      comission_rate,
      photo_url
    } = req.body;

    isverified = false,
      isactive = true,

    addUserCase.execute(
      firstname,
      lastname,
      email,
      username,
      password,
      phoneNumber,
      occupation,
      usertype,
      isverified,
      isactive,
      referrer,
      birthday,
      address,
      new Date().getTime(),
      income_source,
      nationality,
      comission_rate,
      photo_url
    )
      .then(
        result => {
          const getUserByEmailCase = GetUserByEmail(repository);
          var email = result.email
          var phoneNumber = result.phoneNumber
          var username = result.username

          getUserByEmailCase.execute(email, phoneNumber, username)
            .then(
              async (result) => {
                let user = { ...result.toJSON() };
                user.id = result._id;
                delete user._id;
                delete user.__v;
                delete user.password;

                // await new UserRegisteredPublisher(natsWrapper.client).publish({
                //   user
                // });

                res.json(result);
              },
              err => { next(res.status(500).send({ error: err.message })) }
            )
        },
        err => { next(res.status(500).send({ error: err.message })) }
      );
  }

  const updateUser = (req, res, next) => {
    const updateUserCase = UpdateUser(repository);
    const { 
      firstname,
      lastname,
      email,
      username,
      password,
      phoneNumber,
      occupation,
      usertype,
      isverified,
      isactive,
      referrer,
      birthday,
      address,
      timestamp,
      income_source,
      nationality,
      comission_rate,
      photo_url,
      id
    } = req.body;
    console.log(req.body)

    updateUserCase.execute(
      firstname,
      lastname,
      email,
      username,
      password,
      phoneNumber,
      occupation,
      usertype,
      isverified,
      isactive,
      referrer,
      birthday,
      address,
      timestamp,
      income_source,
      nationality,
      comission_rate,
      photo_url,
      id
    )
      .then(
        result => { res.json(result) },
        err => { next(res.status(500).send({ error: err.message })) }
      );
  }

  return {
    getUsers,
    addUser,
    getUserById,
    updateUser,
    getPlayersAgents,
    getPlayers,
    getUserByType,
    getPlayerAgentAndSuperAgent
  }
}
