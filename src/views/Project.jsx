import React, {Component} from 'react';
import getData from '../utils/getData';
import {Container} from '../components/StyledComponents';
import Loader from '../components/Loader';

class Project extends Component {
    constructor(props){
        super(props);

        this.state = {
            project: {
                content: []
            }
        }
    }

    componentWillMount(){
        getData('projects', this.props.match.params.id).then(res=>{
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
            <div className="project-page">
                {this.state.project.content.length ? <Container>
                <div dangerouslySetInnerHTML={this.createMarkup()}/>
                </Container> : <Loader />}
            </div>
        )
    }

   


}


export default Project;
