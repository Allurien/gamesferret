<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>

   const newItem = {
        username: 'testa',
        email:  'testa@gmail.com',
        //email: '',
        password: 'testa'
    };
    const postnewItem = formatPostData(newItem);
   // axios.get('mainpage.php', {
    axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'signup'
            }
    }).then(resp => {
        console.log('POST RESPONSE:', resp);
    });

    function formatPostData(data){
    const params = new URLSearchParams();

    for(let [k, v] of Object.entries(data)){
        params.append(k, v);
    }

    return params;
}


</script>
