FED 2023

# Content Management system course assignment

### By: Ali Nough

### Links:

Rpo: https://github.com/AliNough/fed-y1-cms-ca-ali <br>
Deploy: https://candid-malasada-b09841.netlify.app/

### Logins:

User: noroff <br>
Pass: LiU2$c0LH%JIq&ZT)22sDM5L <br>
Email: alinaj61939@stud.noroff.no <br>

## Challenges:

I was not able to use WooCommerce. I could only use WP REST API. For some reason WooCommerce could not link to WP. The website i was editing was the same (music5169.wordpress.com) but my posts would not show up in WooCommerce.

Working with WordPress as a API, was like editing html codes visually. If you want to create a "div" in WP you simply group some paragraphs or other elements together and it will wrap it with "div". Neat, but had to play around to figure that out.

Targeting only one part of a "post". Since the content you get back from API call is array[0].content.rendered, it will give you HTML codes back and each one right after the other. If you want to get only a paragraph or a picture, you needed to kinda write a code to "match" with what you wanted. <br>
"<img src="${post.content.rendered.match(/<img._?src="(._?)"/)[1]}">"

I wanted to make a website for a resturant at first but since i could not understand WooCommerce, I decided to atleast use WP for API and i landed on a recipe blog site.

This was a good introduction to WordPress REST API. Although it feels like the content for this course was way too big to for such short time. I'm not saying the CA deadline was too short, just the CMS course. Because there are still stuff i dont understand.
