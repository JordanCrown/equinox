# Equinox

A simple, fully responsive jQuery calendar plugin.

## Getting Started

### Link Files

Begin by copying the contents of the 'dist' folder into your site's library folder, ideally into their own 'equinox' directory.

Include the Equinox CSS file in the head of your page:

```
<link rel="stylesheet" type="text/css" href="equinox/equinox.css">
```

Also include the Equinox javascript file as well as the required [jQuery](http://jquery.com/) and [Moment.js](http://momentjs.com/) libraries, preferrably towards the end of your site ahead of the closing `</body>` tag:

```
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.6.0/moment.min.js"></script>
<script type="text/javascript" src="equinox/equinox.min.js"></script>
```

### Initialize Equinox Object

Once all the required CSS and javascript files have been linked, you may instantiate an Equinox object on any element:

```
$('.event-calendar').equinox({});
```