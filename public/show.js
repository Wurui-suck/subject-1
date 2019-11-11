$('.process').on('click', () => {
    axios.get('/process.html').then(
        (response) => {
            $('link[title="style.css"]').remove()
            $('.all').html(response.data)
        }, () => { }
    )
})