import {ReactComponent as NoodlesLogo} from '../icons/fast-food-noodle-svgrepo-com.svg'
import {ReactComponent as PizzaLogo} from '../icons/fast-food-pizza-svgrepo-com.svg'
import {ReactComponent as IceCreamLogo} from '../icons/fast-food-ice-svgrepo-com.svg'
import {ReactComponent as OnigiriLogo} from '../icons/fast-food-onigiri-svgrepo-com.svg'
import {ReactComponent as KebabLogo} from '../icons/fast-food-kebab-svgrepo-com.svg'
import {ReactComponent as DonutLogo} from '../icons/fast-food-donut-svgrepo-com.svg'
import {ReactComponent as PancakeLogo} from '../icons/fast-food-pancake-svgrepo-com.svg'
import {ReactComponent as SandwichLogo} from '../icons/fast-food-sandwich-svgrepo-com.svg'
import {ReactComponent as HotDogLogo} from '../icons/fast-food-hotdog-svgrepo-com.svg'
import {ReactComponent as PopsicleLogo} from '../icons/fast-food-popsicle-svgrepo-com.svg'
export default function Home() {
    return (
        <>
            <div className={'HomeContainer'}>
                <div className={'HomeRow'}>
                    <div className={'ImageContainer'}>
                        <NoodlesLogo className={'ImageNoodle'}/>
                    </div>
                    <div className={'ImageContainer'}>
                        <PizzaLogo className={'ImagePizza'}/>
                    </div>
                    <div className={'ImageContainer'}>
                        <IceCreamLogo className={'ImageIceCream'}/>
                    </div>
                    <div className={'ImageContainer'}>
                        <OnigiriLogo className={'ImageOnigiri'}/>
                    </div>
                </div>
                <div className={'HomeRow'}>
                    <div className={'ImageContainer'}>
                        <DonutLogo className={'ImageDonut'}/>
                    </div>
                    <div className={'HomeImageContainer'}>
                        <h1 className={'HomePageTitleText'}>
                            TDAMS
                        </h1>
                    </div>
                    <div className={'ImageContainer'}>
                        <KebabLogo className={'ImageKebab'}/>
                    </div>
                </div>
                <div className={'HomeRow'}>
                    <div className={'ImageContainer'}>
                        <PopsicleLogo className={'ImagePopsicle'}/>
                    </div>
                    <div className={'ImageContainer'}>
                        <PancakeLogo className={'ImagePancake'}/>
                    </div>
                    <div className={'ImageContainer'}>
                        <SandwichLogo className={'ImageSandwich'}/>
                    </div>
                    <div className={'ImageContainer'}>
                        <HotDogLogo className={'ImageHotdog'}/>
                    </div>
                </div>
            </div>
        </>
    )
}