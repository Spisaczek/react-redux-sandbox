import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title: '' }
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        console.log('no elo onchangesvae hehe');
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course})
    }

    onClickSave(){
        this.props.createCourse(this.state.course);
        console.log('no elo save hehe: ' + this.state.course.title);
    }

    createCourseRow(course, index){
        return(
            <div key={index}>{course.title}</div>
        )
    }

    render(){
        return(
            <div>
                <h1>KURSY KURWO</h1>
                {this.props.coursess.map(this.createCourseRow)}
                <h2>DZIFKO!</h2>
                <input 
                    type="text"
                    value={this.state.course.title}
                    onChange={this.onTitleChange}
                />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }

};

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps){
    return {
        coursess: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
