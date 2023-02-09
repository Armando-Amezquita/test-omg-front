export const login = async(email, password) => {
    try {
        let loginObj = { email, password, }

        const setting = { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginObj) 
        } 

        // const url = 'http://localhost:3002/api/auth/login';
        const url = 'https://test-omg-api-production.up.railway.app/api/auth/login';
        const data =  await (await fetch(url, setting)).json();

        return data
      
    } catch (error) {
        console.log("Ocurrio un error",error);
    }
} 
