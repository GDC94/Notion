import { extendTheme } from "@chakra-ui/react";



export default extendTheme ({
  
    
    styles: {
        global: {
            'html ,body, #root': {
                height: '100%',    
            },
            body: {
                bg: '#fffefc',
                fontfamily: 'Inter',  
            },
        }
    },
    components: {
        Button: {
          // 1. We can update the base styles
          baseStyle: {
            fontWeight: 'bold', // Normally, it is "semibold"
            bg: '#e16259',
          },
          // 2. We can add a new button size or extend existing
          
        },
      },
    colors: {
        primary: {
          500: "#000000",
         

          
     
        },
        red: {
            500: '#e16259'
        }
       
    }
    
})

