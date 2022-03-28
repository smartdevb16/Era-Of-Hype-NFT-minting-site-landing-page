import React from 'react'
import { CollectionData } from './data/HordeData.js'

class CollectionSection extends React.Component {

    render() {
        return (
            <div className="w-full flex flex-col place-items-center pt-10 pb-24" id="collectionSection">
                <div className="w-84.5%">
                    <div className="w-full flex flex-col place-items-center space-y-6 mb-10">
                        <h1 className="text-white text-7xl font-black italic">COLLECTIBLE HORD</h1>
                        <p className="text-white text-xl max-w-4xl text-center">
                            The PVS Army have identified the <strong>first Legendary Hord to appear in the Metaverse</strong>. This is the Zermione Horde, one of the most powerfull familly on the planet Clout. The next Collection to be identified by the PVS will be directly communicated on our social networks.
                        </p>
                        <p className="text-white text-xl">The planet Clout has invaded the Metaverse, it’s the Era of Hype.</p>
                    </div>
                    <div className="w-full grid grid-rows-2 grid-cols-3 grid-flow-row gap-5">
                        {CollectionData.map((item, i) => {
                            return (
                                <div className="flex flex-col place-items-center space-y-4" key={i}>
                                    <img className="rounded-3xl" src={item.image} alt="horde"></img>
                                    <h1 className="text-white text-3xl font-extrabold italic">{item.collectionName}</h1>
                                    { i === 0 &&
                                        <div className="text-white text-xl">
                                            <h2>
                                                <span className="text-green-600 pr-2">
                                                    <i className="fas fa-check"></i>
                                                </span>{item.legendaryCount} Units: Legendary</h2>
                                            <h2>
                                                <span className="text-green-600 pr-2">
                                                    <i className="fas fa-check"></i>
                                                </span>{item.geneticCount} Units: Genetic</h2>
                                        </div>
                                    }
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full space-y-6 px-10">
                        <h1 className="text-white text-3xl font-bold italic">GLOSSARY</h1>
                        <p className="text-white text-xl">
                            Horde : A Horde is the common name of every collection<br></br>
                            Zermione : Zermione is the first horde identified by the psv to appear in the metaverse<br></br>
                            Psv : The psv is the army of the metaverse<br></br>
                            Era of Hype: The era of hype is the rare intergalactic phenomenon having teleported the hordes of the clout planet into the metaverse. This is the name of the Metaverse elite.<br></br>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CollectionSection;