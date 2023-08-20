<script>
    // 컴포넌트 내부의 스크립트 로직을 작성할 수 있습니다.
</script>

<svelte:head>
    <title>Ggalggalboard</title>

</svelte:head>

<div class="main-wrap">
    <!-- 상단 Navbar -->
    <div class="navbar-container">
        <input class="input-text" type="text" size="40">
        <button>검색</button>
    </div>

    <!-- 다른 사람이 작성한 글 영역 (반복적으로 표시) -->
    <div class="feed-container">
        <div class="user-info">
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                alt="업로드한 사진" class="profile-image">
            <span>유저이름</span>
        </div>

        <p>작성한 텍스트 내용이 여기에 들어갑니다.</p>
        
        <div class="post-info">
            <img src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                alt="업로드한 사진" class="feed-image">
            <button class="btn">좋아요</button>
        </div>
    </div>

</div>

