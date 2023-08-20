<script lang = "ts">
    import '../app.css'
</script>


<slot></slot>  
<!-- page.svelte 보여줄 자리 layout 안에 page가 있는 형태. -->


<div class="navbar-container">
    <a class="btn" href="/">피드</a>
    <a class="btn" href="/search">검색</a>
    <a class="btn" href="/user">유저</a>
</div>

