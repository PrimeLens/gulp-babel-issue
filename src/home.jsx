var homePageComponent = React.createClass({
    getInitialState:function(){
        return {}
    },    
    render:function(){
        return (
<div id="homepage">
    <p>
        This is a basic page. The jsx and css for this page level component is 
        stored in <span className='codestyle'>/public/jsx-pages</span>
    </p>
</div>
        );
    }
});