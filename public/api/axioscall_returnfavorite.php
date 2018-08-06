<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>

// let recommendedGame = ['com.gameloft.android.ANMP.GloftINHM',           
//                         // 'techmasterplus.classicsudokupro', 'techmasterplus.sudokumasteradfree'
//                       ];

  
// recommendedGame = JSON.stringify(recommendedGame);
const newItem = {
        user_id: '1',
    };

const postnewItem = formatPostData(newItem);
axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'returnfavorite'
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
