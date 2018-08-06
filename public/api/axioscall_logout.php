
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>

   //axios.get('mainpage.php', {
    axios.get('gameapp.php', {
        params: {
            action: 'logout'
        }
    }).then(resp => {
        console.log('GET RESPONSE:', resp);
    });
</script>