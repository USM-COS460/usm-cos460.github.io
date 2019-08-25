---
title: Projects
permalink: /projects
layout: post
---
<div class="projects">
	<ul class="post-list">
		{% assign projects = site.projects | sort: 'order' %}
		{% for project in projects %}
		<li>
			<!--
			{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
			<span class="post-meta">{{ project.date | date: date_format }}</span>
			-->
			<h2>
				<a class="post-link" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a>
			</h2>
			{{ project.excerpt }}
		</li>
		{% endfor %}
	</ul>
</div>
