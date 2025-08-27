---
title: Lecture Slides
layout: post
permalink: /slides
---

<div class="notes">
	<ul class="post-list">
		{% assign notes = site.data.lecture-slides | sort: 'order' %}
		{% for note in notes %}
		{% unless note.hide %}
		<li>
			<h2>
    			<a class="post-link" href="/slides/{{ note.slug }}/">{{ note.title | escape }}</a>
			</h2>
			{{ note.subtitle }}
		</li>

		{% endunless %}
		{% endfor %}
	</ul>
</div>
