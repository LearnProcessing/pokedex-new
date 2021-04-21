import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function waitPokeballResult(pokemonName){
    return new Promise((resolve, reject) => {
        let timerInterval
     
        const successModal = () => {
                MySwal.fire({
                title: <p className="font-press-start text-xs">{pokemonName} captured!</p>,
                imageUrl: 'https://thumbs.gfycat.com/AmbitiousInfantileIndochinesetiger-max-1mb.gif',
                imageAlt: 'flying pokeball',
                imageWidth: 300,
                imageHeight: 300,
                showConfirmButton: false,
                timer: 2000,
                didOpen: () => {
                    timerInterval = setInterval(() => {
                    }, 100) 
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then(() => {
                    MySwal.fire({
                        title: <p className="font-press-start text-xs">enter a nickname for your new pokemon!</p>,
                        input: 'text',
                        customClass: 'font-press-start'
                    }).then(result => {
                        let pokemonNickname = result.value
                        resolve(pokemonNickname)
                    })
                    
    
            }) 
        }
        
        const failedModal = () => MySwal.fire({
            title: <p className="font-press-start text-xs">{pokemonName} escaped . . .</p>,
            imageUrl: 'https://thumbs.gfycat.com/EachWellinformedAidi-small.gif',
            imageAlt: 'opening pokeball',
            imageWidth: 300,
            imageHeight: 300,
            showConfirmButton: false,
            timer: 2000,
            didOpen: () => {
                timerInterval = setInterval(() => {
                }, 100) 
            },
            willClose: () => {
                clearInterval(timerInterval)
                reject()
            }
        })
        
        MySwal.fire({
            title: <p className="font-press-start text-xs">capturing {pokemonName} . . .</p>,
            background: '#f5f6fa',
            imageUrl: 'https://thumbs.gfycat.com/GenerousTimelyBrontosaurus-max-1mb.gif',
            imageAlt: 'moving pokeball',
            imageWidth: 300,
            imageHeight: 300,
            showConfirmButton: false,
            timer: 2000,
            didOpen: () => {
                timerInterval = setInterval(() => {
        
                }, 100) 
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then(() => {
    
                if( Math.random() < 0.5){
                    successModal()
                } else {
                    failedModal()
                }
                
            })

    })
        

}


