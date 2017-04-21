<!--
  class home page to display everything from units to homework and quizzes
 -->

<style>
    .class-units {
        margin: 10px;
        /*display: inline;
    float: left;*/
    }
    
    .unit-lesson {
        height: 50px;
    }
    
    .unit-lesson:last-child {
        margin-bottom: 0;
    }
    
    .unit-lesson h4 {
        margin: 0;
    }
    
    .lesson-description {
        font-size: small;
    }
    
    .class-unit {
        margin-bottom: 5px;
    }
    
    .meta-info {
        margin: 10px;
    }
    
    .class-view {
        padding-bottom: 0px !important;
    }
    
    .class-view ul {
        list-style-type: none;
        margin: 0;
        padding-left: 20px;
    }
    
    .meta-info li {
        margin: 0;
    }
    
    .class-contact {
        text-align: right;
    }
    
    .info {
        padding-right: 12px;
    }
    
    .unit-row {
        padding-bottom: 0px !important;
    }
    
    .unit-first-col {
        padding-right: 15px;
    }
    
    .material-buttons .btn {
        margin-right: 10px;
        background-color: #364b9f;
        border-color: #2941a2!important
    }
    
    .material-buttons .btn:hover {
        background-color: #2941a2!important
    }
    
    .material-buttons td:last-child {
        margin-right: 0
    }
    
    .material-buttons td {
        margin-right: 10px;
    }
    
    .modalBox .modal-backdrop {
        opacity: 0;
        display: none;
    }
    
    .modalBox .modal-body {
        height: 88%;
        overflow-y: auto;
    }
    
    .modalBox .modal-content {
        height: 90%;
    }
    
    .modalBox .modal-dialog {
        width: 70%;
        height: 100%;
    }
    
    .modal-open .modal.modalBox {
        overflow-y: hidden;
    }
    
    .modal-open #app {
        overflow: hidden;
    }
    
    .content {
        padding: 0 15px;
    }
body.modal-open {
    overflow: hidden;
    height: 100vh;
}

@media (max-width: 767px){
.modalBox .modal-dialog {
    width: 95%;
}
}
.modal-body-div iframe {
    width: 100%;
    min-height: 66vh;
}
</style>

<template>
    <div class="class-view">
        <div class="panel-heading">
            <h2>{{cdata.classTitle}} - An Example HVU Application</h2>
        </div>

        <!-- add class-specific stuff here-->
        <div class="row">
            <div class="col-md-6">
                <div class="meta-info">
                    <h3>Course Information</h3>
                    <ul>
                        <li><a href="http://personal.palouse.net/thanshaw/ee261/syllabus261.htm">Course Syllabus</a></li>
                    </ul>

                    <h3>Reference Material</h3>
                    <ul>
                        <li><a href="http://personal.palouse.net/thanshaw/ee261/SIUnits.pdf">SI Units and Prefixes</a></li>
                        <li><a href="http://learn.digilentinc.com/Documents/160">Resistors and Resistor Color Codes</a> <a href="http://www.youtube.com/watch?v=I7xe8biuvds&list=PL170A01159D42313D&index=2&feature=plpp_video">(Video)</a></li>
                        <li><a href="http://personal.palouse.net/thanshaw/ee261/OP27_datasheet.pdf">Op-Amp OP-27 Data Sheet</a></li>
                        <li><a href="http://personal.palouse.net/thanshaw/ee261/PracticalCaps.pdf">Physical Capacitors and Reading Capacitance Values</a> <a href="http://www.youtube.com/watch?v=kN-FVhtPz5E&list=PL170A01159D42313D&index=12&feature=plpp_video">(Video)</a></li>
                    </ul>
                </div>
            </div>
            <div class="class-contact col-md-6">
                <div class="info">
                    <h3>Instructor</h3>
                    <ul>
                        <li>Tim Hanshaw</li>
                        <li>thanshaw@eecs.wsu.edu</li>
                        <li>Office: EME 306</li>
                        <li>Office hours: Wednesday, 12:10PM – 1:30PM</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="class-units">
            <h3>Chapters</h3>
            <div v-for="chapter in cdata.chapters">
                <div class="class-unit panel panel-info">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{ chapter.name }}</h3>
                    </div>
                    <div class="panel-body unit-row" v-for="version in chapter.versions">
                        <table>
                            <col width="200">
                                <col width="60">
                                    <col width="80">
                                        <col width="80">

                                            <tr class="unit-lesson material-buttons">
                                                <td class="unit-first-col">
                                                    <h4><a @click="open(version,'chapter')" href="javascript:void(0);">{{version.name}}</a></h4>
                                                    <span class="lesson-description">{{version.title}}</span>
                                                </td>

                                                <td>
                                                    <a href="javascript:void(0);" class="btn btn-info" disabled="disabled">Practice</a>
                                                </td>

                                                <td v-if='version.exercises != ""'>
                                                    <a @click="open(version,'exercises')" href="javascript:void(0);" class="btn btn-info">Exercises</a>
                                                </td>
                                                <td v-if='version.exercises == ""'>
                                                    <a href="javascript:void(0);" class="btn btn-info" disabled="disabled">Exercises</a>
                                                </td>
 
                                                <td v-if='version.videos != ""'>
                                                    <a @click="open(version,'videos')" href="javascript:void(0);" class="btn btn-info">Video</a>
                                                </td>
                                                <td v-if='version.videos == ""'>
                                                    <a href="javascript:void(0);" class="btn btn-info" disabled="disabled">Video</a>
                                                </td>

                                                <td v-if='version.homework != ""'>
                                                    <a @click="open(version,'homework')" href="javascript:void(0);" class="btn btn-info">Homework</a>
                                                </td>
                                                <td v-if='version.homework == ""'>
                                                    <a href="javascript:void(0);" class="btn btn-info" disabled="disabled">Homework</a>
                                                </td>
                                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!---------Modal open---------->
        <div class="modal fade modalBox" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal"><i class="icon-xs-o-md"></i></button>
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title caps"><strong>Arrays and array operations - Videos</strong></h4>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-div">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---------Modal close---------->

        
</template>

<script>
    export default {
        name: 'Class',
        vuex: {
            getters: {
                cdata: state => state.classData
            }
        },
        methods: {
            open(version,callType) {

                $('.modal-body-div').html('');

                var chaptername = version['name'];

                $.each( version[callType], function( key, value ) {
                    if(value.type == 'pdf')
                    {

                        console.log(value.url);

                        var modalbody = '<div><h4>'+chaptername+'</h4><span><iframe src="'+value.url+'"></iframe></span><p></p></div>';

                        $('.modal-body-div').append(modalbody);
                    }else {
                        var modalbody = '<div><h4>'+chaptername+'</h4><span>'+value.iframe+'</span><p></p></div>';

                        

                        $('.modal-body-div').append(modalbody);
                    }
                });

                $('.modalBox').modal('show');               
            }
        }
    }
</script>