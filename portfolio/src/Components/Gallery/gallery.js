import React,{Component} from 'react';
import './gallery.scss';

class Gallery extends Component {
    
    ProjectList() {
        const list = [
            { img: "https://s.tmimgcdn.com/scr/68700/homelist-real-estate-wordpress-theme_68756-original.png?width=1024&height=1146", text: "texto 1"},
            { img: "https://www.pixelemu.com/media/djcatalog2/images/item/0/internet_f.jpg", text: "texto 2"}
        ]
    }

    render() {
        return(
            <div className="gallery">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        )
    }
}

export default Gallery;