import React, { Component } from 'react';
import AOS from 'aos';
import classNames from 'classnames';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'
import './Style.css';

const ViewStyle = props => (
  <div className={ props.componentStyle } data-aos={ props.aos }>
    <p>{ props.text }</p>
  </div>
);

export default Watch(
  class Style extends Component {

    componentDidMount() {
      this.aos = AOS;
      this.aos.init({
        duration: 1200,
   
      });
    }

    componentDidUpdate() {
      this.aos.refresh();
    }

    render() {

      const aosClass = classNames({
        "aos-init": true,
  
      });



      return(
        <span css={{
            display:'none',
          '@media (min-width: 720px)': {
            display: `block`,
            color:'#9c0',
            alignSelf: 'center',
            fontSize: '25px',
            margin: 'auto 0 auto 0'
          },
        }}>
           { this.props.isInViewport ? (
            <ViewStyle
              aos="fade-up"
              componentStyle={ aosClass }
              text={this.props.children}
            />
          ) : (
            <ViewStyle
              aos="fade-down"
              componentStyle={ aosClass }
              text={this.props.children}
       
            />
          )}
        </span>
      )
    }
  }
);