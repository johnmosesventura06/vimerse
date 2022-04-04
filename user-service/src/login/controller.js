const axios = require('axios').default;
const LoginUser = require('./use_cases/login');

module.exports = (repository) => {
  

  const loginUser = (req, res, next) => {
    const loginUserCase = LoginUser(repository);
    const { 
            email,
            password,

          } = req.body;
          console.log("alert", req.body)
          
      loginUserCase.execute(
        email,
        password,
      )
      .then(
        async (result) => {
          try {
            console.log("user login",result)
            const { data } = await axios.post(`${process.env.AUTH_SERVICE}/auth/token`,
              {
                userId: result.id,
                userType: result.usertype
              },
              {
                headers: {
                  // this header is required,
                  // this is the only security the
                  // endpoint has
                  // POST /auth/token MUST NOT be called
                  // in a client app
                  'x-api-key': process.env.API_KEY
                },
              }
            );

            res.status(200).json({
              user: result,
              ...data
            });
          } catch(error) {
            // log the errors
            if(error.response && error.response.data) {
              const { errors } = error.response.data;

              errors.forEach((error) => console.error('error:', error.message));
            }

            res.status(500).send({ error: error.message });
          }
        },
        err =>  {next(res.status(500).send({ error: err.message })) }
      );
  }

  return {
    loginUser,
  }
}
