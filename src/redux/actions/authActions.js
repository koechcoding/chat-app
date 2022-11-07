import { fb, googleProvider, facebookProvider } from '../../config/fbConfig';

export const signInWithProvider = (provider)=>{
    let chosenProvider = '';
    if(provider === 'google'){
        chosenProvider = googleProvider;
    }
    if (provider === 'facebook') {
        chosenProvider = facebookProvider;
    }
    fb.auth()
      .signInWithRedirect(chosenProvider)
      .then(result =>{
        const token = result.credential.accessToken;
        localStorage.setItem('jwt-token', token);
      });
}