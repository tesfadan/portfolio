export default () : boolean => {
    const value = window.localStorage.getItem('txdxnthememode');
    
    if (value !== null) {
      if (value.includes('dark')) {
        return true;
      }
    }
    return false;
}