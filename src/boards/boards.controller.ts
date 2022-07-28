import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  //@Body("title") title = title 정보만 가져옴 express의 req.body 부분
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardsService.createBoard(title, description);
  }
}
