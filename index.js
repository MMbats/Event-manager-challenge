function createEvent(eventName) {
    let registeredUsers = [];
    function registerUser(username) {
      if (!registeredUsers.includes(username)) {
        registeredUsers.push(username);
        console.log(`${username} has been registered for ${eventName}`);
      } else {
        console.log(`${username} is already registered for ${eventName}`);
      }
    }
    function checkRegistration(username) {
      if (registeredUsers.includes(username)) {
        return `${username} is registered for ${eventName}`;
      } else {
        return `${username} is not registered for ${eventName}`;
      }
    }
    return {
      registerUser,
      checkRegistration
    };
  }
  const codingWorkshop = createEvent("Coding Workshop");
  codingWorkshop.registerUser("Alice");
  codingWorkshop.registerUser("Bob");
  console.log(codingWorkshop.checkRegistration("Alice"));  
  console.log(codingWorkshop.checkRegistration("Charlie"));  
  const designConference = createEvent("Design Conference");
  designConference.registerUser("Charlie");
  designConference.registerUser("Alice");
  console.log(designConference.checkRegistration("Charlie"));  
  console.log(designConference.checkRegistration("Bob")); 
  