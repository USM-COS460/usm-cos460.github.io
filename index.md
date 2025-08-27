---
title: COS 460
---
*Please refer to the [Syllabus](syllabus.html) for full details of the course. This page is only a quick-reference for dates and course materials.*

<table>
    <tr>
        <th>Week</th>
        <th>Topic</th>
        <th>Reading</th>
        <th>Slides</th>
        <th>Notes & Links</th>
    </tr>

    {% for week in site.data.schedule %}
        <tr>
            <td>{{ week.week }}</td>
            <td>{{ week.topic | markdownify  }}</td>
            <td>{{ week.reading | markdownify  }}</td>
            <td>
                {% for deck in week.slides %}
                    <a href="/slides/{{ deck }}/">{{ deck }}</a>,
                {% endfor %}
            </td>            
            <td>{{ week.notes | markdownify }}</td>
        </tr>
    {% endfor %}
</table>