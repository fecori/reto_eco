import React, {useEffect, useState} from 'react';
import './scss/App.scss';
import SliderComp from "./components/slider";
import axios from "axios";
import Listado from "./components/lista";

function App() {
    const [getSlider, setSlider] = useState();
    const [getSliderNotes, setSliderNotes] = useState();
    const [getNotes, setNotes] = useState();

    useEffect(() => {
        const APIContent = axios("https://api.jsonbin.io/v3/b/63654b012b3499323bf58225")
            .then(res => {
                if (res.data && res.data.record) {
                    const {data: {record: {notes = []}}} = res;
                    const _sliderHome = notes.filter((item: any) => item.type === "slider_grid")
                    const _sliderNote = notes.filter((item: any) => item.type === "slider_note")
                    const _notes = notes.filter((item: any) => item.type === "section_note")
                    setSlider(_sliderHome)
                    setSliderNotes(_sliderNote)
                    setNotes(_notes)
                }
            })
            .catch(err => console.log(err))
    }, [setSlider, setSliderNotes, setNotes])

    return (
        <div className="container-eco md:container md:mx-auto">
            <div className="px-4 flex flex-row flex-wrap mb-2.5">
                <div className="w-full sm:w-1/3 md:w-2/4 px-2 mb-2.5">
                    <div className="container-eco__header-logo">
                        <div className="container-eco__logo text-red-600 text-5xl">globoplay</div>
                    </div>
                    <SliderComp data={getSlider} type="home" items={1}/>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/4 px-2 mb-2.5">
                    <div className="container-eco__header-boton hidden md:block">
                        <button
                            className="w-32 rounded-md bg-red-600 hover:bg-red-400 text-white text-xs font-bold shadow-sm px-3.5 py-2.5">Ver
                            más
                        </button>
                    </div>
                    <SliderComp data={getSliderNotes} type="single" items={3}/>
                    <div className="container-eco__header-boton md:invisible">
                        <button
                            className="w-full rounded-md bg-red-600 hover:bg-red-400 text-white text-xs font-bold shadow-sm px-3.5 py-2.5">Ver
                            más
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4 flex flex-row flex-wrap mb-2.5">
                <div className="w-full px-2">
                    <div className="text-black font-bold text-3xl mb-2.5">Tecnologia & Games</div>
                    <Listado data={getNotes}/>
                </div>
            </div>
        </div>
    );
}

export default App;
