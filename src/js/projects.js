import { handleResponse } from './utils';
import dummy from './dummy.json';

function getProjects() {
    const requestOptions = {
        method: 'Get',
        headers: { 'Accept': 'application/vnd.github.inertia-preview+json' }
    };

    return fetch("https://api.github.com/users/ghaake/repos", requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
}

export function showProjects() {
    let projectRef = document.getElementById('projects');

    getProjects()
        .then(response => {
            response.forEach(element => {
                projectRef.innerHTML += buildProjectList(element);
            });
        });
}

function buildProjectList(project) {
    return `
        <div class="col col-sm-10 col-md-6 ">
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title"><a href="${project.html_url}" target="_blank">${project.name}</a></h5>
                    <h6 class="card-subtitle mb-2 text-muted">${project.description ? project.description : ""}</h6>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>${project.license ? "License: " + project.license.name : "" }</li>
                        <li>Last Update: ${project.updated_at}</li>
                    </ul>
                    
                    <a href="${project.homepage ? project.homepage : project.html_url}" class="card-link">
                        <i class="fas fa-external-link-alt shift-left"></i>Open Project
                    </a>
                </div>
            </div>
        </div>
    `;
}
