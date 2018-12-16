import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import AdminPosts from './AdminPosts';
import AdminProjects from './AdminProjects';
import AdminCategories from './AdminCategories';
import {db, auth, googleAuthProvider} from '../../config/firebase';

export default class Admin extends React.Component {
    constructor() {
        super();
        this.submitPost = this.submitPost.bind(this);
        this.submitCategory = this.submitCategory.bind(this);
        this.isKazik = this.isKazik.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            user: null
        }
    }

    submitPost(values) {
        console.log(values);
        let post = {
            ...values,
            thumb: values.thumb
                ? values.thumb.name
                : '',
            link: encodeURI(values.title).replace(/%20/g, '_').toLocaleLowerCase(),
            published: new Date().getTime()
        }

        if (!values.cats) {
            db.collection('posts').add(post);
            return;
        }

        db.collection('categories').where('name', '==', values.cats).get().then((snap) => {

            console.log(snap.docs[0].id);

            post.cat = snap.docs[0].data();
            db.collection('posts').add(post);
            return;

        });

    }

    getInitialProjectValues() {
        return {}
    }

    isKazik(user) {

        if (user) {
            console.log(user.uid);
            if (user.uid == 'dJx7ohzVf1fFO7i7qTTYauMcg093') {
                console.log("I'm in");
                return true
            }
            return false;
        }
        return false;
    }

    login(){
        auth.signInWithPopup(googleAuthProvider);
        auth.onAuthStateChanged(user => {
            this.setState({user: user})
        })
    }

    logout(){
        auth.signOut()
        auth.onAuthStateChanged(user => {
            this.setState({user: null})
        })
    }

    submitProject(values) {
        console.log(values);
        let post = {
            ...values,
            thumb: values.thumb
                ? values.thumb.name
                : '',
            link: encodeURI(values.title).replace(/%20/g, '_').toLocaleLowerCase(),
            published: new Date().getTime()
        }

        if (!values.cats) {
            db.collection('projects').add(post);
            return;
        }

        db.collection('categories').where('name', '==', values.cats).get().then((snap) => {

            console.log(snap.docs[0].id);

            post.cat = snap.docs[0].data();
            db.collection('projects').add(post);
            return;

        });

    }

    submitCategory(values) {
        console.log(values);
        let cat = {
            ...values,
            published: new Date().getTime()
        }
        db.collection('categories').add(cat);
    }

    render() {
        return (<Switch>
            <section className="admin">

                <Route exact="exact" path="/admin/posts" render={(props) => <AdminPosts onSubmit={this.submitPost}/>}></Route>

                <Route exact="exact" path="/admin/categories" render={(props) => <AdminCategories onSubmit={this.submitCategory}/>}></Route>

                <Route exact="exact" path="/admin/projects" render={(props) => <AdminProjects onSubmit={this.submitProject} initialValues={this.getInitialProjectValues()} />}></Route>



            </section>
        </Switch>)

    }
}