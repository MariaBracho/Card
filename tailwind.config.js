module.exports = {
    content: ["./public/index.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                main_background: 'hsl(233, 47%, 7%)',
                card_background: 'hsl(244, 38%, 16%)',
                accent: 'hsl(277, 64%, 61%)',
                main_heading: 'hsl(0, 0%, 100%)',
                main_paragraph: 'hsla(0, 0%, 100%, 0.75)',
                stat_headings: 'hsla(0, 0%, 100%, 0.6)',
            },
            fontFamily: {
                Inter: ['Inter', 'sans-serif'],
                Lexend_Deca: ['Lexend Deca', 'sans-serif'],
            },
            backgroundImage: {
                'header_mobile': "url('/assets/images/image-header-mobile.jpg')",
                'header_desk': "url('/assets/images/image-header-desktop.jpg')",

            },
        },
    },
    plugins: [],
}