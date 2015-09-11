Meteor.startup(function(){
  console.log("okgrow:iron-router-autoscroll package is deprecated. Please use okgrow:router-autoscroll.")
});

if (Meteor.isClient){
  IronRouterAutoscroll = RouterAutoscroll;
}
