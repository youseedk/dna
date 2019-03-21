<div class="frctl-example">
  <div class="changelog">
    {{#each releases}}
    <article class="changelog-item">
      <figure class="changelog-avatar">
        <img width="60" height="60" src="{{this.author.avatar_url}}" alt="Authored by {{this.author.login}}" />
      </figure>
      <div class="changelog-details">
        <h2 class="changelog-title"><a href="{{this.html_url}}">{{this.name}}</a> ({{this.tag_name}})</h2>
        <p class="changelog-desc">{{this.body}}</p>
        <span class="changelog-released">{{this.published_at}}</span>
      </div>
    </article>
    {{/each}}
  </div>
</div>
