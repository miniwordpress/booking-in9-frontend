const { default: theme } = require("@material-tailwind/react/theme");

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Prompt-Regular','Prompt-Black','Prompt-BlackItalic','Prompt-Bold',
                    'Prompt-BoldItalic','Prompt-ExtraBold','Prompt-ExtraBoldItalic',
                    'Prompt-ExtraLight','Prompt-ExtraLightItalic','Prompt-Italic','Prompt-Light',
                    'Prompt-LightItalic','Prompt-Medium','Prompt-MediumItalic','Prompt-SemiBold',
                    'Prompt-SemiBoldItalic','Prompt-Thin','Prompt-ThinItalic'],
            },
        },
    },
}