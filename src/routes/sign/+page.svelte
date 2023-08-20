<script>
    // 컴포넌트 내부의 스크립트 로직을 작성할 수 있습니다.
    var condition = 1;
</script>



<svelte:head>
    <title>Sign in / up</title>
</svelte:head>


{#if condition}
    <div class="main-wrap">
        <div class="sign-wrap">
            <div class="sign-container">
                <div class="sign-login">
                    <span> ID </span>
                    <input class="input-text" type="text" size="0">
    
                    <span> PW </span>
                    <input class="input-text" type="text" size="0">
                </div>
                <div class="sign-btn">
                    <button class="btn">회원가입</button>
                    <button class="btn">접속</button>    
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="main-wrap">
        <div class="sign-wrap">
            <div class="sign-container">
                <div class="sign-login">
                    <span> ID </span>
                    <input class="input-text" type="text" size="0">
    
                    <span> NAME </span>
                    <input class="input-text" type="text" size="0">
        
                    <span> PW </span>
                    <input class="input-text" type="text" size="0">
                </div>
                <div class="sign-btn">
                    <button class="btn">취소</button>
                    <button class="btn">회원가입</button>    
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    /* 컴포넌트 내부의 스타일을 작성할 수 있습니다. */
</style>

<!-- /sign/_layout.svelte -->
<script context="module">
    export let layout = null; // 해당 디렉토리 내에서 레이아웃 사용 안 함
</script>

<svelte:component this="{layout}" let:page>
    <svelte:component this="{page}" />
</svelte:component>
