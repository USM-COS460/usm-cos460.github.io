---
title: Lecture Notes
layout: post
permalink: /lecture-notes
---
<div class="notes">
	<ul class="post-list">
		{% assign notes = site.notes | sort: 'order' %}
		{% for note in notes %}
		<li>
			<h2>
				<a class="post-link" href="{{ note.url | relative_url }}">{{ note.order }} - {{ note.title | escape }}</a>
			</h2>
			{{ note.excerpt }}
		</li>
		{% endfor %}
	</ul>
</div>
