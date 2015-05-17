# oEmbed.ly
[oEmbed.ly](http://oEmbed.ly/) provides a detailed list of oEmbed providers, allowing everyone to add and promote online services supporting [oEmbed](http://oembed.com/).

## Add oEmbed provider

To add oEmbed provider, send us this info:
```
{
	"name":          "YouTube",
	"description":   "Video hosting service",
	"url":           "https://www.youtube.com/",
	"icon":          "http://oEmbed.ly/providers/youtube.png",
	"endpoints":     [
		"https://www.youtube.com/oembed/"
	],
	"regex": [
		"#https?://(www.)?youtu.be/.*#i",
		"#https?://(www.)?youtube.com/v/.*#i",
		"#https?://(www.)?youtube.com/embed/.*#i",
		"#https?://(www.)?youtube.com/gif.*#i",
		"#https?://(www.)?youtube.com/watch.*#i",
		"#https?://(www.)?youtube.com/profile.*#i"
		"#https?://(www.)?youtube.com/playlist.*#i"
	],
	"parameters":    {
		"format": "xml|json",
		"scheme": "http|https",
		"url":    ""
	}
}
```

## Allowed parameters

Parameter     | Info
------------- | -----
name          | Provider name.
description   | Provider description.
url           | Provider site URL.
icon          | Provider icon. Size: 256x256. Format: png
endpoints     | A list of oEmbed API endpoints.
regex         | A list of URL structures.
parameters    | A list of allowed parameters. Some providers accept params like custom width, video autoplay ect.

## Approval process

Each provider will be manually approved. Be patient.
