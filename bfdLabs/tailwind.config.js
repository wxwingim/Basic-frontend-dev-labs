module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          '01': '#1F3F68',
          '02': '#316099',
          '03': '#356EAD',
          '04': '#5A98D0',
          '05': '#98C3E8',
        },
        'www1': '#FFF8E1',
        'www2': '#FFCC80',
        '555': '#64B5F6',
        'eeeeee1': '#98D0FC',
        'eeeeee2': '#3481D7',
        'redwww1': '#EB5757',
        'redwww2': '#872727',
        'wwww1': '#AF6CED',
        'wwww2': '#5E199D',
        'search': '#F4F4F4',
      },
      width: {
        '940': '940px',
        '510': '520px',
        '400': '420px',
        '220': '220px',
        'wwd': '380px',
        '422': '422px',
        '1270px': '1270px',
        '1073': '65%',
        '380px': '380px',
        '300px': '300px',
        '540px': '540px',
        '301px': '301px',
      },
      lineHeight: {
        '4.625': '4.625rem',
        '1.625': '1.625rem',
        '2.875': '2.875rem',
        '1.875': '1.875rem',
        '3.625': '3.625rem',
        '2.375': '2.375rem',
      },
      padding: {
        'pt-15': '3.75rem',
        'pt-35': '2.1875rem',
        'hero': '11.875rem',
        'il': '5px',
        '1.625': '1.625rem',
        '39': '39px',
        '125px': '125px',
        '91px': '91px',
        '50px': '50px',
        '15px': '15px',
        '54px': '54px',
        '21px': '21px',
        '23px': '23px',
      },
      letterSpacing: {
        'forh1': '.04em',
        'table': '.02em',
      },
      borderRadius: {
        'butt': '0.625rem',
        'table': '200px'
      },
      boxShadow: {
        'butt': '5px 10px 20px rgba(53, 110, 173, 0.2)',
        'wwd': '5px 20px 50px rgba(16, 112, 177, 0.2)',
        'forma': '5px 10px 50px rgba(16, 112, 177, 0.2);',
        'buttEnd': '5px 10px 20px rgba(16, 112, 177, 0.2)',
      },
      minHeight: {
        'wwd': '525px',
      },
      margin: {
        'h2': '158px',
        'table': '91px',
        '30px': '30px',
        '13px': '13px',
        '19px': '19px',
        '57px': '57px',
        '63px': '63px',
        '71px': '71px',
      },
      fontSize: {
        'h1': '4rem',
        '28px': '28px',
        '44px': '44px',
      },
      height: {
        '417': '417px',
        '380px': '380px',
        '200px': '200px',
        '30px': '30px',
      },
      backgroundSize: {
        'footer': '90%',
        'fff': '100%',
        '000': '0%',
      },
      zIndex: {
        'm1': '-1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
