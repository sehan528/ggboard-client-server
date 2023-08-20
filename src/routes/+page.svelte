<script>
    export let data;
</script>

<svelte:head>
    <title>Ggalggalboard</title>
</svelte:head>

<div class="main-wrap">

    <ul>
        {#each data.countries as country}
            <li>{country.name}</li>
        {/each}
    </ul>

<!-- 게시글 작성 영역 -->
    <div class="post-container">
        <!-- 글 쓰기 박스 -->
        <textarea placeholder="와 정말 재밌겠다..."></textarea>

        <!-- 사진 미리보기 영역 -->
        <div class="image-container">
            <div class="image"></div>
            <div class="image"></div>
            <div class="image"></div>
            <div class="image"></div>
        </div>

        <!-- 사진 등록 및 작성 버튼 -->
        <div class="button-container">
            <button class="btn">사진 등록</button>
            <button class="btn">작성</button>
        </div>
    </div>

    <!-- 다른 사람이 작성한 글 영역 (반복적으로 표시) -->
    <div class="feed-container">
        <div class="user-info">
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                    alt="업로드한 사진" class="profile-image">
            <span>유저이름</span>
            <!-- <span>작성날짜</span> -->
        </div>
        
        <p>작성한 텍스트 내용이 여기에 들어갑니다.</p>
        
        <div class="post-info">
            <img src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                    alt="업로드한 사진" class="feed-image">
            <button class="btn">좋아요</button>
        </div>
    </div>

    <!-- 상단 Navbar -->
    <!-- <div class="navbar-container">
        <button class="btn">피드</button>
        <button class="btn">검색</button>
        <button class="btn">유저</button>
    </div> -->
</div>
