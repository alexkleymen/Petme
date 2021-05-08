function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('im first');
    console.log(await resolveAfter2Seconds());
    console.log("im third")
  
  }
  
  asyncCall();
  