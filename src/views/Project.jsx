import React, {Component} from 'react';
import getData from '../utils/getData';
import Loader from '../components/Loader';
import Media from '../components/project/Media';

class Project extends Component {
    constructor(props){
        super(props);

        this.state = {
            project: {
                content: [],
            }
        }
    }

    UNSAFE_componentWillMount(){
        getData('projects', this.props.match.params.id).then(res=>{
            console.log(res.data.entries[0])
            this.setState({
                project: res.data.entries[0]
            })
        })
    }

    createMarkup(el){
        return {
            __html: this.state.project.content
        }
    }
    render(){
      
        return (

            <div>
                {this.state.project.content.length ?  (
                <div className="project-page">
                <div className="project-content" dangerouslySetInnerHTML={this.createMarkup()}/>
                <Media photos={this.state.project.gallery} />
                </div>)
                
                
                : <Loader/>}
            </div>
           
        )
    }

   


}


export default Project;
