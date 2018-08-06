<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>

// let recommendedGame = ['com.gameloft.android.ANMP.GloftINHM',           
//                         // 'techmasterplus.classicsudokupro', 'techmasterplus.sudokumasteradfree'
//                       ];

  
// recommendedGame = JSON.stringify(recommendedGame);
const newItem = {
        user_id: '1',
        game_id: 'tasas.classicsudokupro'
        //favorite_list: recommendedGame

    };
const postnewItem = formatPostData(newItem);
axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'savefavorite'
            }
    }).then(resp => {
        console.log('POST RESPONSE:', resp);
});

}


</script>
