import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UncontrolledRating/UnControlledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";
import {SimpleExample} from "./components/useEffect/UseEffect";

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(true)

    const [value, setValue] = useState('2')

    return (<div className='App'>
            <PageTitle title={'This is APP component'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            Article 1
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            <OnOff on={on} setOn={setOn}/>
            <UncontrolledOnOff onChange={setOn}/>
            <UnControlledAccordion titleValue={'Users'} />
            <UnControlledAccordion titleValue={'Menu'} />
            <UnControlledRating/>
            <Select value={value} onChange={setValue} items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'},
            ]}/>
            <SimpleExample/>
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props:PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}



export default App;
