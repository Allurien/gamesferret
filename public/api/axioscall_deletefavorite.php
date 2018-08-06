<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>


const newItem = {
        user_id: '24',
        game_id: 'testa'
    };

const postnewItem = formatPostData(newItem);
axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'deletefavor'
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