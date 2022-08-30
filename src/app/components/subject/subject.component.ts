import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';
import { SujetService } from 'src/app/services/sujet.service';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  starRating:number=0;
  sujet:any
  constructor(private sujetService: SujetService,private commentService: CommentService,
     private activatedRoute: ActivatedRoute, public auth: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        console.log(params["id"]);
        let id =  params["id"]

        this.commentService.getSujet(id).subscribe(sujet =>{
          this.sujet = sujet;
        })

        
      })
  }

  addComment(input:String){
    let commment = { text:input, userId:this.auth.loggedUser.id, sujetId:this.sujet.id }
    console.log(commment)
    this.commentService.createComment(commment).subscribe((result:any)=>{
      this.sujet.comments.push(result)

    })
  }

  deleteComment(id:number){
      this.commentService.deleteComment(id).subscribe((result:any)=>{
        this.sujet.comments = this.sujet.comments.filter((el:any)=>el.id != id)
      })
  }

  editComment(id:number){
    const dialogRef = this.dialog.open(EditCommentComponent, {
      width: '250px',
      data: {id:id, sujetId:this.sujet.id},
    });
  }

}
