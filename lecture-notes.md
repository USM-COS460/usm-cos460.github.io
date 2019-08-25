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
            <!--
			{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
			<span class="post-meta">{{ note.date | date: date_format }}</span>
            -->
			<h2><span class="post-meta">{{ note.order }}</span>
				<a class="post-link" href="{{ note.url | relative_url }}">{{ note.title | escape }}</a>
			</h2>
			<blockquote>{{ note.excerpt }}</blockquote>
		</li>
		{% endfor %}
	</ul>
</div>
