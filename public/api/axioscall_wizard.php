<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>

    const newItem = {
        genre: 'board',
        platform:  'android',
        //price_value: 'free'
        price_value: 'paid'
    };
    const postnewItem = formatPostData(newItem);
    axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'wizardpage'
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