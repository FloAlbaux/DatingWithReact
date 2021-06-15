

async function fetchUsers(){
    axios
      .get("https://randomuser.me/api/?results=50")
      .then(response => {
        console.Console({ users: response.data.results });
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
}