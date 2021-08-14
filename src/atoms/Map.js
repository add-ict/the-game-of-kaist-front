import React, {useEffect, useRef} from "react";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import './Map.scss'
import {useSelector} from "react-redux";

const genHTML = val => {
    let affectTo = ''
    if (val.affectTo.Relation) affectTo += 'R'
    if (val.affectTo.Grades) affectTo += 'G'
    if (val.affectTo.Health) affectTo += 'H'
    if (val.affectTo.Bonus) affectTo += 'B'
    return `${val.who}<br />`+ `${val.tooltip}` + `[${affectTo}]`
}
const getFill = (val, defaultFill, location, nextLocation) => {
    if (!!val) {

        if (val.location == nextLocation) return "#fddf00" //there
        if (location == val.location) return "#0029ff" //here
        if (val.canGo) return "#ff0000" //can go
    }
    if (defaultFill == 1) return "#c0ac6e"
    else return "#c69c6d"
}
const getFillBg = val => {
    if (val) {
        return "#95b5ff"
    }
    return '#fff'
}

const Circle = ({canGo, onClick, id, xy, fill, fillbg}) => {
    const onClick2 = (res) => {
        id = parseInt(res.target.id.split("_")[1])
        console.log(id, 'clicked')
        onClick(id)
    }
    if (!!onClick && canGo)
        return [
            <circle key={'ckmap-circle-bg_' + id} id={'map-circle-bg_' + id} cx={xy[0]} cy={xy[1]} r="35.41325"
                    fill={fillbg}/>,
            <g className="circles" id={'map-circle-g_' + id} key={'ckmap-circle-g_' + id} onClick={onClick2}>
                <circle id={'map-circle_' + id} key={'ckmap-circle_' + id} cx={xy[0]} cy={xy[1]} r="26.55993"
                        fill={fill}></circle>
                <text id={'map-circle-text_' + id} key={'ckmap-circle-text_' + id} x={xy[0]} y={xy[1]}>{id}</text>
            </g>
        ];
    else
        return [
            <circle key={'ckmap-circle-bg_' + id} cx={xy[0]} cy={xy[1]} r="35.41325" fill={fillbg}/>,
            <g id={'map-circle-g_' + id} className="circles" key={'ckmap-circle-g_' + id}>
                <circle key={'ckmap-circle_' + id} cx={xy[0]} cy={xy[1]} r="26.55993" fill={fill}></circle>
                <text key={'ckmap-circle-text_' + id} x={xy[0]} y={xy[1]}>{id}</text>
            </g>
        ];
};
const Path = ({xyxy}) => {
    const xy1 = [xyxy[0], xyxy[1]]
    const xy2 = [xyxy[2], xyxy[3]]
    return (
        <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="20"
            d={`M${xy1[0]} ${xy1[1]}L${xy2[0]} ${xy2[1]}`}
        ></path>
    );
};

const paths = ['115.09305 35.41325 141.65298 159.3596', '867.6245 35.41325 115.09305 35.41325', '274.45265 239.0394 327.57252 35.41325', '274.45265 247.89272 486.93212 212.47947', '141.65298 159.3596 35.41325 194.77285', '35.41325 309.86589 35.41325 194.77285', '345.27914 841.06457 35.41325 309.86589', '1080.10397 371.83907 345.27914 841.06457', '274.45265 247.89272 584.31854 690.55828', '610.87848 424.95894 832.21126 531.19868', '885.33113 265.59934 610.87848 424.95894', '1080.10397 371.83907 885.33113 265.59934', '867.6245 35.41325 885.33113 265.59934', '486.93212 212.47947 610.87848 424.95894', '690.55828 123.94636 486.93212 212.47947', '761.38477 35.41325 690.55828 123.94636']
const circles = ["115.09305 35.41325 0", "141.65298 159.3596 1", "221.33278 35.41325 0", "327.57252 35.41325 0", "433.81225 35.41325 0", "301.01258 141.65298 0", "274.45265 247.89272 0", "486.93212 212.47947 0", "593.17185 168.21291 0", "548.9053 318.71921 0", "610.87848 424.95894 0", "699.41159 371.83907 0", "1080.10397 371.83907 0", "956.15762 451.51887 0", "336.42583 336.42583 0", "460.37219 513.49205 0", "97.38642 416.10563 0", "35.41325 194.77285 1", "35.41325 309.86589 1", "159.3596 522.34536 1", "283.30596 734.82483 1", "221.33278 628.5851 1", "345.27914 841.06457 1", "469.2255 761.38477 1", "584.31854 690.55828 1", "522.34536 602.02517 1", "380.97672 230.27405 1", "398.39901 424.95894 1", "646.29172 35.41325 1", "761.38477 35.41325 1", "690.55828 123.94636 1", "540.05199 35.41325 1", "885.33113 265.59934 1", "876.47781 150.50629 1", "867.6245 35.41325 1", "982.71755 318.71921 1", "796.79801 318.71921 1", "725.97152 478.07881 1", "709.12502 610.35742 1", "832.21126 531.19868 1"]
const polygons = ['622.536 664.519 608.799 665.962 615.448 676.374 622.536 664.519', '557.928 652.341 559.952 666.004 570.072 658.92 557.928 652.341', '789.228 511.129 797.692 522.044 803.038 510.907 789.228 511.129', '870.514 505.521 856.778 506.964 863.427 517.376 870.514 505.521', '651.863 401.039 638.078 401.9 644.281 412.584 651.863 401.039', '587.347 383.708 588.237 397.492 598.907 391.267 587.347 383.708', '882.004 219.453 876.534 232.136 888.869 231.438 882.004 219.453', '714.311 35.047 726.665 41.223 726.665 28.87 714.311 35.047', '732.251 71.979 744.791 66.191 735.145 58.474 732.251 71.979', '440.973 221.24 454.3 224.867 451.871 212.755 440.973 221.24', '284.203 201.653 275.554 212.421 287.628 215.034 284.203 201.653', '280.564 34.929 292.82 41.298 293.013 28.946 280.564 34.929']
const Map = ({onClick}) => {
    const {mapData, turn, location, nextLocation} = useSelector(state => ({
        mapData: state.privateDB?.mapData,
        turn: state.publicDB?.turns,
        nextLocation: state.privateDB?.nextLocation,
        location: state.privateDB?.location,
    }));
    const tooltips = useRef([]);
    useEffect(() => {
        tooltips.current = []
        for (let i = 0; i < 40; i++)
            tooltips.current.push(tippy('#map-circle-g_' + i, {
                allowHTML: true,
            })[0]);
    }, []);
    useEffect(() => {
        for (let i = 0; i < tooltips.current.length; i++) {
            if (mapData?.[i]) tooltips.current[i].setContent(genHTML(mapData?.[i]));
            else tooltips.current[i].setContent("<h1>No Data</h1>");
        }
    }, [mapData])
    return (
        <svg id="mapContainer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1115.51722 876.47781">
            {paths.map((x, i) => {
                const y = x.split(' ');
                return <Path key={`path${i}`} xyxy={y}/>
            })}
            {circles.map((x, i) => {
                const y = x.split(' ');
                return (
                    <Circle canGo={mapData?.[i]?.canGo} onClick={onClick} id={`${i}`} key={`ck${i}`}
                            fill={getFill(mapData?.[i], y[2], location, nextLocation)} fillbg={getFillBg(mapData?.[i])}
                            xy={[y[0], y[1]]}/>
                );
            })}
            {polygons.map((x, i) => <polygon id={`p${i}`} key={`p${i}`} points={x}/>)}

            {turn === 0 ? <g>
                <path className="Bpath"
                      d="M1397.8548,841.50093l-3.1025,3.10249h-11.91648l-3.10345-3.10249v-5.85305h4.72451v3.244a1.02612,1.02612,0,0,0,.987.987h6.69944a1.02612,1.02612,0,0,0,.987-.987v-5.99363a1.02612,1.02612,0,0,0-.987-.987h-9.30748l-3.10345-3.10249V817.302l3.10345-3.10249h11.91648l3.1025,3.10249v5.85305h-4.72452v-3.244a1.02612,1.02612,0,0,0-.987-.987h-6.69944a1.02612,1.02612,0,0,0-.987.987v5.28877a1.02612,1.02612,0,0,0,.987.987h9.30844l3.1025,3.10249Z"
                      transform="translate(-760.06116 -104.48074)"/>
                <path className="Bpath"
                      d="M1413.36631,844.60342h-6.55789l-3.10249-3.10249V827.38514h-3.52522v-4.72356h3.52522V817.0199h4.72451v5.64168h4.93587v4.72356h-4.93587v10.50678a1.02428,1.02428,0,0,0,.987.987h3.94889Z"
                      transform="translate(-760.06116 -104.48074)"/>
                <path className="Bpath"
                      d="M1430.64139,844.60342h-11.84571l-3.10345-3.10249v-6.62867l3.10345-3.10249h7.1212v-2.39669a1.02606,1.02606,0,0,0-.987-.98794h-3.52617a1.0279,1.0279,0,0,0-.987.98794v1.12757h-4.72451v-3.73657l3.10345-3.1025h8.74322l3.10249,3.1025Zm-4.72451-4.72451v-3.4554h-4.51316a1.0279,1.0279,0,0,0-.987.98794v1.48047a1.02612,1.02612,0,0,0,.987.987Z"
                      transform="translate(-760.06116 -104.48074)"/>
                <path className="Bpath"
                      d="M1445.801,828.38514h-6.0644a1.02792,1.02792,0,0,0-.987.98794v15.23034h-4.72451V825.76408l3.10345-3.1025h8.67245Z"
                      transform="translate(-760.06116 -104.48074)"/>
                <path className="Bpath"
                      d="M1462.01828,844.60342h-6.55789l-3.1025-3.10249V827.38514h-3.52521v-4.72356h3.52521V817.0199h4.72452v5.64168h4.93587v4.72356h-4.93587v10.50678a1.02426,1.02426,0,0,0,.987.987h3.94889Z"
                      transform="translate(-760.06116 -104.48074)"/>
                <path className="Wpath"
                      d="M1396.8548,840.50093l-3.1025,3.10249h-11.91648l-3.10345-3.10249v-5.85305h4.72451v3.244a1.02612,1.02612,0,0,0,.987.987h6.69944a1.02612,1.02612,0,0,0,.987-.987v-5.99363a1.02612,1.02612,0,0,0-.987-.987h-9.30748l-3.10345-3.10249V817.302l3.10345-3.10249h11.91648l3.1025,3.10249v5.85305h-4.72452v-3.244a1.02612,1.02612,0,0,0-.987-.987h-6.69944a1.02612,1.02612,0,0,0-.987.987v5.28877a1.02612,1.02612,0,0,0,.987.987h9.30844l3.1025,3.10249Z"
                      transform="translate(-760.06116 -104.48074)"/>
                <path className="Wpath"
                      d="M1412.36631,843.60342h-6.55789l-3.10249-3.10249V827.38514h-3.52522v-4.72356h3.52522V817.0199h4.72451v5.64168h4.93587v4.72356h-4.93587v10.50678a1.02428,1.02428,0,0,0,.987.987h3.94889Z"
                      transform="translate(-760.06116 -104.48074)"/>
                <path className="Wpath"
                      d="M1429.64139,843.60342h-11.84571l-3.10345-3.10249v-6.62867l3.10345-3.10249h7.1212v-2.39669a1.02606,1.02606,0,0,0-.987-.98794h-3.52617a1.0279,1.0279,0,0,0-.987.98794v1.12757h-4.72451v-3.73657l3.10345-3.1025h8.74322l3.10249,3.1025Zm-4.72451-4.72451v-3.4554h-4.51316a1.0279,1.0279,0,0,0-.987.98794v1.48047a1.02612,1.02612,0,0,0,.987.987Z"
                      transform="translate(-760.06116 -104.48074)"/>
                <path className="Wpath"
                      d="M1444.801,827.38514h-6.0644a1.02792,1.02792,0,0,0-.987.98794v15.23034h-4.72451V825.76408l3.10345-3.1025h8.67245Z"
                      transform="translate(-760.06116 -104.48074)"/>
                <path className="Wpath"
                      d="M1461.01828,843.60342h-6.55789l-3.1025-3.10249V827.38514h-3.52521v-4.72356h3.52521V817.0199h4.72452v5.64168h4.93587v4.72356h-4.93587v10.50678a1.02426,1.02426,0,0,0,.987.987h3.94889Z"
                      transform="translate(-760.06116 -104.48074)"/>
            </g> : null}
        </svg>
    );
};

export default Map;