
<script> 
    let message = 'i am message variable !'
    let count = 0
    export let color
    setInterval(() => {
        count += 1
    }, 1000);
    
</script>

<button on:click={e => message += 'i am expended by onclick' } style="background : {color} ; padding : 1rem;">
    i am svelte btn !
    count : {count}
    <!-- message variable is : {message} -->    
</button>