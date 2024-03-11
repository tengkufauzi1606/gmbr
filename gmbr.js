<script>
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    var referer = document.referrer;
    var hasGoogleReferrer = referer.includes("google.com");

    if (isMobile && hasGoogleReferrer) {
        document.getElementById('gambar').style.display = 'block';
    }
</script>