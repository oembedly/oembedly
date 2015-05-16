# oEmbed.ly
oEmbed.ly provides a detailed list of oEmbed providers, allowing everyone to add and promote online services supporting [oEmbed](http://oembed.com/).

## Add oEmbed provider

To add oEmbed provider, send us this info:
```
{
    "name":           "YouTube",
    "url":            "https://www.youtube.com/",
    "icon":           "https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png",
    "endpoint":       "https://www.youtube.com/oembed/",
    "url_structure":  {
        "#https?://(www.)?youtu.be/.*#i",
        "#https?://(www.)?youtube.com/watch.*#i",
        "#https?://(www.)?youtube.com/playlist.*#i"
    }
    "parameters":    {
        "format": "xml|json",
        "url":    "",
    }
}
```

## Allowed parameters

Parameter     | Info
------------- | -----
name          | Provider name.
url           | Provider site URL.
icon          | Provider icon. Size: 256x256. Format: png
endpoint      | oEmbed API endpoint.
url_structure | A list of URL structures.
parameters    | A list of allowed parameters. Some providers accept params like custom width, video autoplay ect.

## Approval process

Each provider will be manually approved. Be patient.
